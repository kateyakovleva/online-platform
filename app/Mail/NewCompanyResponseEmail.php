<?php

namespace App\Mail;

use App\Models\WorkResponse;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewCompanyResponseEmail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public WorkResponse $workResponse
    )
    {
        //
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Новый отклик',
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.new-company-response',
            with: $this->workResponse->load(['resume', 'vacancy'])->toArray()
        );
    }
}
