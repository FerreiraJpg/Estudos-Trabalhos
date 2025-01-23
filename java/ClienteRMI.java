import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class ClienteRMI {
    public static void main(String[] args) {
        try {
            Registry registry = LocateRegistry.getRegistry("localhost", 1099);
            MeuServicoRemoto meuServico = (MeuServicoRemoto) registry.lookup("MeuServico");
            System.out.println(meuServico.obterMensagem());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
