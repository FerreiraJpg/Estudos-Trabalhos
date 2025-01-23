import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier

data = pd.read_csv('Dados_RH_Turnover.csv', delimiter=';')

data['DeptoAtuacao'] = LabelEncoder().fit_transform(data['DeptoAtuacao'])
data['Salario'] = LabelEncoder().fit_transform(data['Salario'])


X = data.drop(columns=['SaiuDaEmpresa'])
y = data['SaiuDaEmpresa']


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

algorithms = {
    "Logistic Regression": LogisticRegression(max_iter=200),
    "Decision Tree": DecisionTreeClassifier(),
    "K-Nearest Neighbors": KNeighborsClassifier()
}

results = {}

for name, model in algorithms.items():
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    cm = confusion_matrix(y_test, y_pred)
    results[name] = {
        "Accuracy": accuracy,
        "Confusion Matrix": cm.tolist()
    }
for model, metrics in results.items():
    print(f"Model: {model}")
    print(f"Accuracy: {metrics['Accuracy']:.2f}")
    print("Confusion Matrix:")
    print(metrics["Confusion Matrix"])
    print()

