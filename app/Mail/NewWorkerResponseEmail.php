<?php

namespace App\Mail;

use App\Models\WorkResponse;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewWorkerResponseEmail extends Mailable
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
            subject: 'Новое предложение',
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.new-worker-response',
            with: $this->workResponse->load(['resume', 'vacancy'])->toArray()
        );
    }
}
