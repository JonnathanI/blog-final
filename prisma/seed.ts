import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.blogf.upsert({
    where: { title: 'Batman mata a Superman'},
    update: {},
    create: {
      title: 'Batman mata a Superman',
      description: ' Batman mata a superman con su criptonita',
      telefono: '094653540',
      email: 'ejemplo1@gmail.com'
         
    }
  });

  const post2 = await prisma.blogf.upsert({
    where: { title: 'Aquaman' },
    update: {},
    create: {
      title: 'Aquaman',
      description: ' Aquaman defiende la Atlantis',
      telefono: '0954121214', // Change the telefono value
      email: 'ejemplo2@gmail.com',
    }
  });

  const post3 = await prisma.blogf.upsert({
    where: { title: 'El Chapo Murio'},
    update: {},
    create: {
      title: 'El Chapo Murio',
      description: ' El Chapo Murio por manos de sus Aliados',
      telefono: '0986512316',
      email: 'ejemplo3@gmail.com'
         
    }
  });

  const post4 = await prisma.blogf.upsert({
    where: { title: 'Niki Jam se vuelve Cristiano' },
    update: {},
    create: {
      title: 'Niki Jam se vuelve Cristiano',
      description: ' Niki Jam se vuelve Cristiano a sus 50 años',
      telefono: '0954121215', // Change the telefono value
      email: 'ejemplo4@gmail.com',
    }
  });
  const post5 = await prisma.blogf.upsert({
    where: { title: 'Saw X'},
    update: {},
    create: {
      title: 'Saw X',
      description: ' La Pelicula de Terror mas Esperada',
      telefono: '098634481',
      email: 'ejemplo5@gmail.com'
         
    }
  });



  console.log({ post1, post2,post3,post4,post5 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });