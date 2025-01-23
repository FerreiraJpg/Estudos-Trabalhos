import java.rmi.Remote;
import java.rmi.RemoteException;

public interface MeuServicoRemoto extends Remote {
    String obterMensagem() throws RemoteException;
}
