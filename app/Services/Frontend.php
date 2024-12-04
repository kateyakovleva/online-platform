<?php


namespace App\Services;


use App\Models\Setting;

class Frontend
{
    public function handle()
    {
        $html = '';
        if (is_file(public_path('index.html'))) {
            $html = file_get_contents(public_path('index.html'));
        }
        if (is_file(public_path('index.csr.html'))) {
            $html = file_get_contents(public_path('index.csr.html'));
        }

        $analytics = Setting::findByCode('analytics');

        if ($analytics) $html = str_replace('</body>', "$analytics->value</body>", $html);

        return response($html);
    }
}
