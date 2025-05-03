'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiSend } from 'react-icons/fi';
import ActionButton from './ActionButton';
import { sendToDiscord } from '../lib/sendToDiscord';

interface SubmissionModalProps {
  caption: string;
  author: string;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({
  caption,
  author,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);

  const handleSendClick = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (canvas) {
      setPreviewDataUrl(canvas.toDataURL('image/png'));
    }
    setShowModal(true);
  };

  const handleConfirm = () => {
    sendToDiscord(caption, author);
    setShowModal(false);
  };

  return (
    <>
      <ActionButton
        icon={FiSend}
        text="Send to WSAF"
        bgColor="bg-[#7289da]"
        onClick={handleSendClick}
      />

      {showModal && (
        <div className="fixed inset-0 bg-[#087f8c]/80 z-50 flex justify-center items-center p-2">
          <div className="bg-white p-6 md:p-8 rounded-2xl max-w-md w-full shadow-xl text-center space-y-4">
            <h2 className="text-xl font-bold text-[#4f1d75]">
              Confirm Submission
            </h2>

            {previewDataUrl && (
              <Image
                src={previewDataUrl}
                alt="Canvas Preview"
                className="w-full aspect-video object-contain rounded border border-[#4f1d75]"
                width={640}
                height={360}
              />
            )}

            <p className="text-sm text-gray-700">
              By submitting your artwork, you agree to our{' '}
              <a
                href="/privacy"
                className="text-[#ff0054] underline hover:text-[#ff5400]"
                target="_blank"
              >
                Privacy Policy
              </a>
              .
            </p>

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 hover:bg-gray-300 text-[#4f1d75] font-medium px-4 py-2 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="bg-[#087f8c] hover:bg-[#066776] text-white font-semibold px-4 py-2 rounded-xl transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubmissionModal;
