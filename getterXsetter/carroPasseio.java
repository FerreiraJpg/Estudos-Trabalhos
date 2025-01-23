package getterXsetter;

public class veiculo {
    private double peso;
    private double velocMax;
    private double preco;

    public veiculo() {

        this.peso = 0.0;
        this.velocMax = 0.0;
        this.preco = 0.0;
    }

    public veiculo(double peso2, double velocMax2, double preco2) {
        this.velocMax = peso2;
        this.peso = velocMax2;
        this.preco = preco2;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public int getVelocMax() {
        return velocMax;
    }

    public void setVelocMax(double velocMax) {
        this.velocMax = velocMax;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}

public class carroPasseio extends veiculo {
    private String cor;
    private String modelo;

    // Construtor padrão
    public carroPasseio() {
        super();
        this.cor = "";
        this.modelo = "";
    }

    public carroPasseio(double peso, double velocMax, double preco, String cor, String modelo) {
        this.cor = cor;
        this.modelo = modelo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
}