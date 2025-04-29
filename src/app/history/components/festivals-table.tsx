const festivalList: {
  name: string;
  dates?: string;
  events?: string;
  links?: { name: string; href: string }[];
}[] = [
  {
    name: 'WSAF 2025',
    dates: '2024 Term 3',
    events: '?',
  },
  {
    name: 'WSAF 2024',
    dates: '8-10 June 2024',
    events: '50+',
    links: [
      {
        name: 'Website',
        href: 'https://2024.wsaf.org.uk',
      },
    ],
  },
  {
    name: 'WSAF 2015',
    dates: '21-24 June 2015',
    events: '130',
    links: [
      {
        name: 'Facebook Page',
        href: 'https://www.facebook.com/warwickstudentartsfest/',
      },
    ],
  },
  {
    name: 'WSAF 2014',
    dates: '21-24 June 2014',
    links: [
      {
        name: 'Facebook Page',
        href: 'https://www.facebook.com/warwickstudentartsfest/posts/pfbid02SY2jPCGEcRthhCqw9MRc9whj8hazeuXBGrrJdar6K2UnjJysGSbb46esuYDRv91Wl',
      },
      {
        name: 'News Article',
        href: 'https://warwick.ac.uk/insite/news/intnews2/wsaf2014',
      },
    ],
  },
  {
    name: 'WSAF 2013',
    dates: '22-25 June 2013',
    links: [
      {
        name: 'Website',
        href: 'http://web.archive.org/web/20130810135711/http://wsaf.co.uk/whatiswsaf.php',
      },
    ],
  },
  {
    name: 'WSAF 2012',
    dates: '24-27 June 2012',
    events: '100+',
    links: [
      {
        name: 'Website',
        href: 'http://web.archive.org/web/20120710055823/http://www.wsaf.co.uk/whatiswsaf.php',
      },
      {
        name: 'News Article',
        href: 'https://warwick.ac.uk/newsandevents/news-old/wsaf_2012/',
      },
    ],
  },
  {
    name: 'WSAF 2011',
    dates: '25-28 June 2011',
    links: [
      {
        name: 'Website',
        href: 'http://web.archive.org/web/20110628003050/http://www.wsaf.co.uk/about.php',
      },
      {
        name: 'News Article',
        href: 'https://warwick.ac.uk/newsandevents/news-old/warwick-student-arts-festival-2011',
      },
    ],
  },
  {
    name: 'WSAF 2010',
    dates: '25-28 June 2010',
    events: '100+',
    links: [
      {
        name: 'News Article',
        href: 'https://warwick.ac.uk/newsandevents/news-old/wsaf2010',
      },
    ],
  },
  {
    name: 'SPLAT-Fest',
    dates: '21-25 June 2009',
    links: [
      {
        name: 'Website',
        href: 'http://web.archive.org/web/20090524043909/http://wsaf.org.uk/',
      },
      {
        name: 'Press Release',
        href: 'https://warwick.ac.uk/newsandevents/pressreleases/award-winning_author_to/',
      },
    ],
  },
  {
    name: "WSAF '08",
    dates: '22-26 June 2008',
    events: '65+',
    links: [
      {
        name: 'Website',
        href: 'https://web.archive.org/web/20081007200600/http://www.wsaf.org.uk/',
      },
      {
        name: 'News Article',
        href: 'https://warwick.ac.uk/newsandevents/news-old/get_set_for',
      },
      {
        name: 'Schedule',
        href: 'https://warwick.ac.uk/newsandevents/news-old/get_set_for/wsaf_prog_08_190608_print.pdf',
      },
      {
        name: 'Trailer',
        href: 'https://www.youtube.com/watch?v=NETIyo4Uc_o',
      },
    ],
  },
  {
    name: "WSAF '07",
    dates: '24-28 June 2007',
    events: '77+',
    links: [
      {
        name: 'Website',
        href: 'https://web.archive.org/web/20070630063134/http://www.wsaf.org.uk/',
      },
    ],
  },
  {
    name: "WSAF '06",
  },
  {
    name: "WSAF '05",
    dates: '19-23 June 2005',
    links: [
      {
        name: 'Warwick Blog',
        href: 'https://web.archive.org/web/20210918050951/https://blogs.warwick.ac.uk/wsaf/?num=10&start=10',
      },
      {
        name: 'Music Video',
        href: 'https://www.youtube.com/watch?v=zdXN7Y-Flxo',
      },
    ],
  },
  {
    name: "WSAF '04",
    dates: '20-24 June 2004',
    events: '50+',
    links: [
      {
        name: 'Website',
        href: 'https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/',
      },
      {
        name: 'BBC News',
        href: 'https://www.bbc.co.uk/coventry/features/student/break-dancing-at-warwick-uni.shtml',
      },
    ],
  },
];

export default function FestivalsTable() {
  return (
    <figure className="m-4">
      <table className="mx-auto table-auto rounded-md bg-slate-100 text-slate-600 border-2 border-teal text-sm sm:text-base">
        <thead>
          <tr className="uppercase sm:text-lg">
            <th className="px-2 sm:px-4 py-0.5">Name</th>
            <th className="px-2 sm:px-4 py-0.5">Dates</th>
            <th className="px-2 sm:px-4 py-0.5">Events</th>
            <th className="px-2 sm:px-4 py-0.5">Links</th>
          </tr>
        </thead>
        <tbody>
          {festivalList.map((festival) => (
            <tr key={festival.name} className="border-t border-teal">
              <th className="px-2 sm:px-4 py-0.5">{festival.name}</th>
              <td className="px-2 sm:px-4 py-0.5">{festival.dates || '-'}</td>
              <td className="px-2 sm:px-4 py-0.5">{festival.events || '-'}</td>
              <td className="px-2 sm:px-4 py-0.5">
                {festival.links
                  ? festival.links.map((link) => (
                      <a
                        key={link.href}
                        target="_blank"
                        href={link.href}
                        rel="noopener noreferrer"
                        className="text-teal block"
                      >
                        {link.name}
                      </a>
                    ))
                  : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="text-xs mt-0.5">
        Table of all WSAF Festivals
      </figcaption>
    </figure>
  );
}
