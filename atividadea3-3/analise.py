import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

file_path = 'DadosTreino_Cardiopatas.csv'
dados = pd.read_csv(file_path)

dados = dados["Idade;EstadoCivil;Genero;CategoriaPeso;Colesterol;Adm_Stress;Ansiedade;2nd_AtaqueCoracao"].str.split(';', expand=True)

dados.columns = [
    "Idade", "EstadoCivil", "Genero", "CategoriaPeso", 
    "Colesterol", "Adm_Stress", "Ansiedade", "2nd_AtaqueCoracao"
]

dados["2nd_AtaqueCoracao"] = dados["2nd_AtaqueCoracao"].map({"Sim": 1, "Nao": 0})

dados = dados.apply(pd.to_numeric)

X = dados.drop(columns="2nd_AtaqueCoracao")
y = dados["2nd_AtaqueCoracao"]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42, stratify=y)

neuronios = [5, 9]
ativacoes = ["relu", "logistic"]
algoritmos = ["adam", "lbfgs"]
resultados = []

for n_neurons in neuronios:
    for activation in ativacoes:
        for solver in algoritmos:
            modelo = MLPClassifier(
                hidden_layer_sizes=(n_neurons,),
                activation=activation,
                solver=solver,
                max_iter=2000,
                random_state=42
            )
            modelo.fit(X_train, y_train)
            
            y_pred = modelo.predict(X_test)
            acc = accuracy_score(y_test, y_pred)
            cm = confusion_matrix(y_test, y_pred)

            resultados.append({
                "Neuronios": n_neurons,
                "Ativacao": activation,
                "Algoritmo": solver,
                "Acuracia": acc,
                "Matriz_Confusao": cm
            })

resultados_df = pd.DataFrame(resultados)
print("Resultados: Acurácia por Arquitetura")
print(resultados_df[["Neuronios", "Ativacao", "Algoritmo", "Acuracia"]])

for i, resultado in enumerate(resultados):
    print(f"\nModelo {i+1}:")
    print(f"Neurônios: {resultado['Neuronios']}, Ativação: {resultado['Ativacao']}, Algoritmo: {resultado['Algoritmo']}")
    print(f"Acurácia: {resultado['Acuracia']:.4f}")
    print("Matriz de Confusão:")
    print(resultado['Matriz_Confusao'])
