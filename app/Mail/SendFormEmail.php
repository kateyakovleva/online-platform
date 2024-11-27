<?php

namespace App\Mail;

use App\Http\Requests\FormRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SendFormEmail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public FormRequest $request
    )
    {
        //
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Новый запрос с сайта',
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.send-form.blade',
            with: $this->request->all(),
        );
    }
}
