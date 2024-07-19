# Trabalho de React

## Tema: Lista de séries de TV

Meu trabalho utiliza uma lista para mostrar na tela uma **lista de séries**. Da mesma forma que é possível **adicionar** itens à lista, também é possível **modificar e deletar**. 

## Git Bash

**Para inicar foram usados os seguintes códigos no Git Bash:**

* npx create-react-app hook-usecontext
* cd hook-usecontext
* code .
* npm start

## VSCode

Após abrir o VsCode através do código **"code ."** comecei a fazer algumas alterações no arquivo, como a exclusão de alguns arquivos que não seriam utilizados. 

E então foi inciada o processo de criar as pastas e arquivos para o trabalho. Criando então a pasta **"components"**, e dentro dela, os arquivos **"MessageForm.jsx"** e **"SeriesList.jsx"**.

## MessageForm

Dentro desse arquivo foi criado o hook **"useState"**, que gerencia funções como: **messages, editIndex, editMessage.** 

* **messages:** Armazena um array de mensagens;
* **editIndex:** Mantém o índice da mensagem sendo editada
* **editMessage :** Mantém o conteúdo da mensagem sendo editada.

**Outros estados:**

* **handleAddMessage(newMessage):** Adiciona uma nova mensagem ao estado messages.

* **handleEditMessage(index):** Define editIndex para o índice da mensagem que está sendo editada e preenche editMessage com o conteúdo dessa mensagem.

* **handleUpdateMessage(updatedMessage, index):** Atualiza a mensagem no índice especificado em messages com updatedMessage.

* **handleDeleteMessage(index):** Remove a mensagem no índice especificado de messages.

### Props
O "MessageForm" recebe como props as funções: **handleAddMessage, editIndex, setEditIndex e editMessage.** Já a "SeriesList" recebe como props: **messages, handleEditMessage e handleDeleteMessage.**

### SerieList

Dentro do arquivo "SerieList.jsx", é usado o **"map"** que itera sobre o array "messages" e renderiza cada mensagem como um item de lista "li".

A propriedade **"key"**, usadado no código "li key={index}" é definida como "index" para ajudar o React a identificar cada item de forma única durante as atualizações, assim como faz com que cada mensagem seja exibida como um item de uma lista "li".

### Botões 

* Para criar um botão, por exemplo o **"Editar"** é necessário chamar a função, através do clique, **"onEditMessage"** passando o index da mensagem como argumento.

* Para criar um botão **"Remover"** é necessário chamar a função, também através do clique, **"onDeleteMessage"** passando o index da mensagem como argumento.

### Usabilidade

Props como, messages, onEditMessage, onDeleteMessage são passadas pelo componente **"App.js"** ao renderizar o **"SerieList"**, dessa forma possibilitando a funcionalidade da página web. 

## App

### Importações

Após importar pacotes como react e useState, assim como nos outros componentes, o useState é utilizado para criar **três estados no componente**, que são: **messages, editIndex e editMessage** (como citados anteriormente).

### Manipulação de mensagens

Após as importações, é inciada a construção das variáveis, através de **"const"**, que primeiramnete usa o handleAddMessage para adicionar **"newMessage"** ao estado de **"messages"**.

**Outras funções utilizadas:**

* **handleEditMessage(index):** Define editIndex como index e preenche editMessage com a mensagem correspondente ao índice index.

* **handleUpdateMessage(updatedMessage, index):** Atualiza a mensagem no índice index em messages com updatedMessage, depois limpa editIndex e editMessage.

* **handleDeleteMessage(index):** Remove a mensagem no índice index de messages

### Exportação

Por fim, é exportado o componente **"App"** para que ele possa ser importado e usado em outros arquivos.