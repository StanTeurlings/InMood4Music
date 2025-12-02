import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  // --- users ---
  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      username: 'Alice',
      email: 'alice@example.com',
      passwordHash:
        '$2a$12$2CGJbvuLfRH35fDa8B6Npun2U5yIkKqY3d3VH9l.9BWKuRxYJuRd2',
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@example.com' },
    update: {},
    create: {
      username: 'Bob',
      email: 'bob@example.com',
      passwordHash:
        '$2a$12$2CGJbvuLfRH35fDa8B6Npun2U5yIkKqY3d3VH9l.9BWKuRxYJuRd2',
    },
  });

  const carol = await prisma.user.upsert({
    where: { email: 'carol@example.com' },
    update: {},
    create: {
      username: 'Carol',
      email: 'carol@example.com',
      passwordHash:
        '$2a$12$2CGJbvuLfRH35fDa8B6Npun2U5yIkKqY3d3VH9l.9BWKuRxYJuRd2',
    },
  });

  const dave = await prisma.user.upsert({
    where: { email: 'dave@example.com' },
    update: {},
    create: {
      username: 'Dave',
      email: 'dave@example.com',
      passwordHash:
        '$2a$12$2CGJbvuLfRH35fDa8B6Npun2U5yIkKqY3d3VH9l.9BWKuRxYJuRd2',
    },
  });

  const eve = await prisma.user.upsert({
    where: { email: 'eve@example.com' },
    update: {},
    create: {
      username: 'Eve',
      email: 'eve@example.com',
      passwordHash:
        '$2a$12$2CGJbvuLfRH35fDa8B6Npun2U5yIkKqY3d3VH9l.9BWKuRxYJuRd2',
    },
  });

  //-- moods --
  const happyandenergetic = await prisma.mood.upsert({
    where: { name: 'Happy and Energetic' },
    update: {},
    create: {
      name: 'Happy and Energetic',
    },
  });

  const calmandfocused = await prisma.mood.upsert({
    where: { name: 'Calm and Focused' },
    update: {},
    create: {
      name: 'Calm and Focused',
    },
  });

  const motivatedandfocused = await prisma.mood.upsert({
    where: { name: 'Motivated and Focused' },
    update: {},
    create: {
      name: 'Motivated and Focused',
    },
  });

  const introspectiveandsad = await prisma.mood.upsert({
    where: { name: 'Introspective and Sad' },
    update: {},
    create: {
      name: 'Introspective and Sad',
    },
  });

  const scaryandanxious = await prisma.mood.upsert({
    where: { name: 'Scary and Anxious' },
    update: {},
    create: {
      name: 'Scary and Anxious',
    },
  });

  //-- genres --
  const pop = await prisma.genre.upsert({
    where: { name: 'Pop' },
    update: {},
    create: {
      name: 'Pop',
    },
  });

  const rock = await prisma.genre.upsert({
    where: { name: 'Rock' },
    update: {},
    create: {
      name: 'Rock',
    },
  });

  const jazz = await prisma.genre.upsert({
    where: { name: 'Jazz' },
    update: {},
    create: {
      name: 'Jazz',
    },
  });

  const classical = await prisma.genre.upsert({
    where: { name: 'Classical' },
    update: {},
    create: {
      name: 'Classical',
    },
  });

  const hiphop = await prisma.genre.upsert({
    where: { name: 'Hip-Hop' },
    update: {},
    create: {
      name: 'Hip-Hop',
    },
  });

  const electronic = await prisma.genre.upsert({
    where: { name: 'Electronic' },
    update: {},
    create: {
      name: 'Electronic',
    },
  });

  const blues = await prisma.genre.upsert({
    where: { name: 'Blues' },
    update: {},
    create: {
      name: 'Blues',
    },
  });

  const country = await prisma.genre.upsert({
    where: { name: 'Country' },
    update: {},
    create: {
      name: 'Country',
    },
  });

  const reggae = await prisma.genre.upsert({
    where: { name: 'Reggae' },
    update: {},
    create: {
      name: 'Reggae',
    },
  });

  const metal = await prisma.genre.upsert({
    where: { name: 'Metal' },
    update: {},
    create: {
      name: 'Metal',
    },
  });

  //-- songs --
  const walkingonsunshine = await prisma.song.upsert({
    where: { url: 'https://youtu.be/iPUmE-tne5U?si=mwb-776fZZG70LU1' },
    update: {},
    create: {
      userId: alice.id,
      title: 'Walking on Sunshine',
      artist: 'Katrina and the Waves',
      url: 'https://youtu.be/iPUmE-tne5U?si=mwb-776fZZG70LU1',
      releaseDate: new Date('1985-03-01'),
      genres: {
        create: [{ genreId: pop.id }, { genreId: rock.id }],
      },
    },
  });

  const tonightyoubelongtome = await prisma.song.upsert({
    where: { url: 'https://youtu.be/x5Splw6Sfj0?si=Kbgal5t4UQCkJfXC' },
    update: {},
    create: {
      userId: alice.id,
      title: 'Tonight You Belong to Me',
      artist: 'The lennon sisters',
      url: 'https://youtu.be/x5Splw6Sfj0?si=Kbgal5t4UQCkJfXC',
      releaseDate: new Date('1956-01-01'),
      genres: {
        create: [{ genreId: jazz.id }],
      },
    },
  });

  const whatwasimadefor = await prisma.song.upsert({
    where: { url: 'https://youtu.be/cW8VLC9nnTo?si=VMt-RlhguuRZtU9h' },
    update: {},
    create: {
      userId: bob.id,
      title: 'What Was I Made For?',
      artist: 'Billie Eilish',
      url: 'https://youtu.be/cW8VLC9nnTo?si=VMt-RlhguuRZtU9h',
      releaseDate: new Date('2023-09-13'),
      genres: {
        create: [{ genreId: pop.id }],
      },
    },
  });

  const dontworrybehappy = await prisma.song.upsert({
    where: { url: 'https://youtu.be/d-diB65scQU?si=O_JyBkDDqfG8o4Xg' },
    update: {},
    create: {
      userId: carol.id,
      title: "Don't Worry Be Happy",
      artist: 'Bobby McFerrin',
      url: 'https://youtu.be/d-diB65scQU?si=O_JyBkDDqfG8o4Xg',
      releaseDate: new Date('1988-04-21'),
      genres: {
        create: [{ genreId: jazz.id }],
      },
    },
  });

  const eyeofthetiger = await prisma.song.upsert({
    where: { url: 'https://youtu.be/btPJPFnesV4?si=5vKo4bBSJK3HP7hQ' },
    update: {},
    create: {
      userId: dave.id,
      title: 'Eye of the Tiger',
      artist: 'Survivor',
      url: 'https://youtu.be/btPJPFnesV4?si=5vKo4bBSJK3HP7hQ',
      releaseDate: new Date('1982-05-29'),
      genres: {
        create: [{ genreId: rock.id }],
      },
    },
  });

  //-- reactions --
  const reaction1 = await prisma.reaction.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: alice.id,
      songId: eyeofthetiger.id,
      moodId: motivatedandfocused.id,
      score: 5,
      comment: 'This song really pumps me up!',
    },
  });

  const reaction2 = await prisma.reaction.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: bob.id,
      songId: walkingonsunshine.id,
      moodId: happyandenergetic.id,
      score: 4,
      comment: 'Makes me feel happy!',
    },
  });

  const reaction3 = await prisma.reaction.upsert({
    where: { id: 3 },
    update: {},
    create: {
      userId: carol.id,
      songId: dontworrybehappy.id,
      moodId: calmandfocused.id,
      score: 5,
      comment: 'So relaxing and uplifting.',
    },
  });

  const reaction4 = await prisma.reaction.upsert({
    where: { id: 4 },
    update: {},
    create: {
      userId: dave.id,
      songId: whatwasimadefor.id,
      moodId: introspectiveandsad.id,
      score: 3,
      comment: 'Makes me think about life.',
    },
  });

  const reaction5 = await prisma.reaction.upsert({
    where: { id: 5 },
    update: {},
    create: {
      userId: eve.id,
      songId: tonightyoubelongtome.id,
      moodId: calmandfocused.id,
      score: 4,
      comment: 'A soothing classic.',
    },
  });

  const reaction6 = await prisma.reaction.upsert({
    where: { id: 6 },
    update: {},
    create: {
      userId: alice.id,
      songId: dontworrybehappy.id,
      moodId: happyandenergetic.id,
      score: 5,
      comment: 'Always cheers me up!',
    },
  });

  const reaction7 = await prisma.reaction.upsert({
    where: { id: 7 },
    update: {},
    create: {
      userId: bob.id,
      songId: eyeofthetiger.id,
      moodId: motivatedandfocused.id,
      score: 4,
      comment: 'Great for workouts.',
    },
  });

  const reaction8 = await prisma.reaction.upsert({
    where: { id: 8 },
    update: {},
    create: {
      userId: carol.id,
      songId: walkingonsunshine.id,
      moodId: happyandenergetic.id,
      score: 5,
      comment: "Can't help but dance to this!",
    },
  });

  const reaction9 = await prisma.reaction.upsert({
    where: { id: 9 },
    update: {},
    create: {
      userId: dave.id,
      songId: tonightyoubelongtome.id,
      moodId: calmandfocused.id,
      score: 4,
      comment: 'A beautiful melody.',
    },
  });

  const reaction10 = await prisma.reaction.upsert({
    where: { id: 10 },
    update: {},
    create: {
      userId: eve.id,
      songId: whatwasimadefor.id,
      moodId: introspectiveandsad.id,
      score: 3,
      comment: 'Touches the soul.',
    },
  });

  console.log('Seeding completed.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
