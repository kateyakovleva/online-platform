<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ResumeResource\Pages;
use App\Filament\Resources\ResumeResource\RelationManagers;
use App\Models\Resume;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ResumeResource extends Resource
{
    protected static ?string $model = Resume::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $modelLabel = 'Резюме';
    protected static ?string $pluralModelLabel = 'Резюме';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('customer_id')
                    ->label('Работник')
                    ->relationship('worker', 'name')
                    ->required()
                    ->searchable(),
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
                Forms\Components\Textarea::make('courses')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('interesting')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Select::make('city_id')
                    ->relationship('city', 'name')
                    ->required(),
                Forms\Components\TextInput::make('format')
                    ->maxLength(255),
                Forms\Components\Textarea::make('finances')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('comment')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('file')
                    ->maxLength(65535)
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('customer_id')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('specialization.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('city.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('format')
                    ->searchable(),
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
            'index' => Pages\ListResumes::route('/'),
            'create' => Pages\CreateResume::route('/create'),
            'edit' => Pages\EditResume::route('/{record}/edit'),
        ];
    }
}
