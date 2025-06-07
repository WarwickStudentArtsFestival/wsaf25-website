import { useReactToPrint } from 'react-to-print';
import { RefObject } from 'react';

export default function useTimelinePrinting(
  contentRef: RefObject<HTMLDivElement | null>,
) {
  return useReactToPrint({
    contentRef,
    documentTitle: `WSAF Event Sessions Timeline - ${new Date().toISOString()}`,
    pageStyle: `
    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap');

    body {
      font-family: 'Lexend', sans-serif;
    }

    @page {
      size: A4 landscape; 
      margin: 0; 
    }

    h1, h2, h3, h4, h5, h6 {
      page-break-after: avoid;
      page-break-inside: avoid;
      font-weight: 700; 
      color: #000; 
    }

    .highlighted-heading {
      background-color: #FFBD00 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    table {
      width: 100%; 
      border-collapse: collapse; 
      page-break-inside: auto;
    }

    .timeline-event-session-card {
      page-break-inside: avoid;
      break-inside: avoid; 
    }

    .sticky {
      position: static !important; 
    }

    .w-max {
      width: auto !important; 
    }

    .max-w-full {
      max-width: 100% !important;
    }
    .overflow-x-auto, .overflow-y-auto {
      overflow: visible !important;
    }

    .h-full {
      height: auto !important; 
    }
  `,
  });
}
