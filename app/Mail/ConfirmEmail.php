<?php

namespace App\Mail;

use App\Models\EmailConfirm;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ConfirmEmail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public EmailConfirm $confirm
    )
    {
        //
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Подтвердите почту',
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.register',
            with: $this->confirm->toArray()
        );
    }
}
