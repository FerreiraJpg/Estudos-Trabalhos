import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class MeuServicoRemotoImpl extends UnicastRemoteObject implements MeuServicoRemoto {
    public MeuServicoRemotoImpl() throws RemoteException {
        super();
    }

    @Override
    public String obterMensagem() throws RemoteException {
        return "Olá, mundo!";
    }
}
