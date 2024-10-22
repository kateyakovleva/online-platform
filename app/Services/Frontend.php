<?php


namespace App\Services;


class Frontend
{
    public function handle()
    {
        if (is_file(public_path('index.html'))) {
            return response(file_get_contents(public_path('index.html')));
        }
    }
}
