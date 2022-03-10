# Poc Arquitetura

Essa é a representação da sugestão de arquitetura da Home Transversal

![repesentacao-aquitetura](https://user-images.githubusercontent.com/16557802/157525387-7cbf3eb6-5190-47fd-9cce-4ff6ed49f94c.png)

- A representação do componente `<Home/>` Simula uma requisição que conseguem ids que poderia ser o `userId` na aplicação real
- A `<Home/>`implementa um template de um Dashboard (Area logada) que na nossa aplicação consumira componentes da Design System
- Na Dashboard temos duas props que recebem componentes sendo assim deixa flexível para tem componentes de outros times
- `<LearningEnvironment/>` representa um componente de dentro do pacote de Ambiente de aprendizado
- `<Admission/>` representa um componente de dentro do pacote de Admissão
