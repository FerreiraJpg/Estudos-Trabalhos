import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class ServidorRMI {
    public static void main(String[] args) {
        try {
            MeuServicoRemotoImpl meuServico = new MeuServicoRemotoImpl();
            Registry registry = LocateRegistry.createRegistry(1099);
            registry.rebind("MeuServico", meuServico);
            System.out.println("Servidor RMI pronto!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
