import java.util.*;

class Acao {
    String nome;
    int custo;
    int retorno;
    double razao;

    public Acao(String nome, int custo, int retorno) {
        this.nome = nome;
        this.custo = custo;
        this.retorno = retorno;
        this.razao = calcularRazao();
    }

    public double calcularRazao() {
        return (double) custo / retorno;
    }

    @Override
    public String toString() {
        return "Acao{" +
                "nome='" + nome + '\'' +
                ", custo=" + custo +
                ", retorno=" + retorno +
                ", razao=" + razao +
                '}';
    }
}
public class investimento {
    public static void main(String[] args) {
        final int valorMax = 100000;

        Map<String, Acao> acoes = new HashMap<>();
        acoes.put("A", new Acao("A", 30000, 40000));
        acoes.put("B", new Acao("B", 50000, 60000));
        acoes.put("C", new Acao("C", 40000, 45000));
        acoes.put("D", new Acao("D", 10000, 15000));
        acoes.put("E", new Acao("E", 20000, 25000));

        List<Acao> listaAcoes = new ArrayList<>(acoes.values());
       
        listaAcoes.sort(Comparator.comparingDouble(a -> a.razao));

        int valorAtual = 0;
        List<Acao> acoesEscolhidas = new ArrayList<>();

        for (Acao acao : listaAcoes) {
            if (valorAtual + acao.custo > valorMax) {
                continue;
            }

            while (valorAtual + acao.custo <= valorMax) {
                acoesEscolhidas.add(acao);
                valorAtual += acao.custo;
            }
        }

        System.out.println("Ações escolhidas:");
        for (Acao acao : acoesEscolhidas) {
            System.out.println(acao);
        }

        System.out.println("Valor total utilizado: " + valorAtual);
    }
}
