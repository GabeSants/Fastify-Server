import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
    return { message: 'Hello, Fastify with typescript!'};
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server running!');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    } 
};

start();