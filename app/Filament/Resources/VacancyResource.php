<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VacancyResource\Pages;
use App\Models\Vacancy;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class VacancyResource extends Resource
{
    protected static ?string $model = Vacancy::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $modelLabel = 'Вакансия';
    protected static ?string $pluralModelLabel = 'Вакансии';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('company_id')
                    ->relationship('company', 'name')
                    ->required(),
                Forms\Components\Select::make('specialization_id')
                    ->relationship('specialization', 'name')
                    ->required(),
                Forms\Components\Select::make('skills')
                    ->multiple()
                    ->relationship('skills', 'name')
                    ->preload()
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('vacancy')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('skills_description')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('description')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('growth_description')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Select::make('city_id')
                    ->relationship('city', 'name')
                    ->required(),
                Forms\Components\TextInput::make('format')
                    ->maxLength(255),
                Forms\Components\TextInput::make('price_from')
                    ->numeric(),
                Forms\Components\TextInput::make('price_to')
                    ->numeric(),
                Forms\Components\Toggle::make('price_by_agree')
                    ->required(),
                Forms\Components\Textarea::make('benefits')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('comment')
                    ->maxLength(65535)
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('company.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('city.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('vacancy')
                    ->limit(50)
                    ->sortable(),
                Tables\Columns\TextColumn::make('specialization.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('format')
                    ->limit(50)
                    ->searchable(),
                Tables\Columns\TextColumn::make('price_from')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('price_to')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('price_by_agree')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListVacancies::route('/'),
            'create' => Pages\CreateVacancy::route('/create'),
            'edit' => Pages\EditVacancy::route('/{record}/edit'),
        ];
    }
}
