/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('bulletins').del()
  await knex('bulletins').insert([
    {
      id: 1,
      title: 'Help Lost Code!',
      date: 'Mar 23',
      description: 'Last imagined around 2006. Critical to life moving forward',
      phone: '0800 PHONEME',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cheaptickets.com%2Fblog%2F2015%2F09%2F32-stages-of-planning-a-last-minute-trip%2Fcheap-tickets-32-stages-man-sad-at-computer-600px%2F&psig=AOvVaw07uRYfXm6fl93UlNxMUUrv&ust=1680238858644000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDNmNTvgv4CFQAAAAAdAAAAABAE',
    },
    {
      id: 2,
      title: 'Looking for a good route?',
      date: 'Everyday',
      description:
        'Im a great router, been doing it for years. Call me if you want it done right. Can provide referrals',
      phone: '0800 ROUTE66',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.digitalmomblog.com%2Fare-we-there-yet-road-trip-memes%2F&psig=AOvVaw3OG1YvawXxoKavZ9fk-TPb&ust=1680239059968000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCuprTwgv4CFQAAAAAdAAAAABAJ',
    },
    {
      id: 3,
      title: 'Laptop to sell!',
      date: 'Apr 23',
      description: 'Doesnt work. Could be a fun project',
      phone: '0800 NOTAJOKE',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmemegenerator.net%2Fbroken-computer&psig=AOvVaw2khBe9PrYDKZbQA3SSPPPg&ust=1680239198223000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjBnfbwgv4CFQAAAAAdAAAAABAE',
    },
  ])
}
