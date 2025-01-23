package getterXsetter;

public class veiculo {
    private int velocMax;
    private int peso;
    private float preco;

    public veiculo() {
        this.velocMax = 0;
        this.peso = 0;
        this.preco = 0;
    }

    public veiculo(int velocMax, int peso, Float preco) {
        this.velocMax = velocMax;
        this.peso = peso;
        this.preco = preco;
    }

    public int getVelocMax() {
        return velocMax;
    }

    public void setVelocMax(int velocMax) {
        this.velocMax = velocMax;
    }

    public int getPeso() {
        return peso;
    }

    public void setPeso(int peso) {
        this.peso = peso;
    }

    public float getPreco() {
        return preco;
    }

    public void setPreco(float preco) {
        this.preco = preco;
    }

}