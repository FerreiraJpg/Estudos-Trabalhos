package produtorEconsumidor;

import java.util.concurrent.ArrayBlockingQueue;

public class produtorEconsumidor {

    public static void main(String[] args) {
        // Crie um buffer compartilhado com capacidade para 5 elementos
        ArrayBlockingQueue<Integer> buffer = new ArrayBlockingQueue<>(5);

        // Crie o produtor e o consumidor
        Thread produtorThread = new Thread(new Produtor(buffer));
        Thread consumidorThread = new Thread(new Consumidor(buffer));

        // Inicie as threads
        produtorThread.start();
        consumidorThread.start();
    }
}

class Produtor implements Runnable {
    private final ArrayBlockingQueue<Integer> buffer;

    public Produtor(ArrayBlockingQueue<Integer> buffer) {
        this.buffer = buffer;
    }

    @Override
    public void run() {
        try {
            for (int i = 0; i < 10; i++) {
                System.out.println("Produzindo: " + i);
                buffer.put(i); // Insere no buffer
                Thread.sleep(1000); // Simula produção
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

class Consumidor implements Runnable {
    private final ArrayBlockingQueue<Integer> buffer;

    public Consumidor(ArrayBlockingQueue<Integer> buffer) {
        this.buffer = buffer;
    }

    @Override
    public void run() {
        try {
            for (int i = 0; i < 10; i++) {
                int valor = buffer.take(); // Remove do buffer
                System.out.println("Consumindo: " + valor);
                Thread.sleep(1500); // Simula consumo
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}