import os
import re

def editar_arquivos_html(diretorio=".", novo_codigo=""):
    for root, _, files in os.walk(diretorio):
        for file in files:
            if file.endswith(".html"):
                caminho_arquivo = os.path.join(root, file)
                print(f"Processando arquivo: {caminho_arquivo}")

                with open(caminho_arquivo, 'r', encoding='utf-8') as f:
                    conteudo = f.read()

                # Remover o código existente (se necessário)
                conteudo = re.sub(
                    r'(<style>.*?</style>\s*<button[^>]*id="ctaButton"[^>]*>.*?</button>.*?</div>)',
                    '',
                    conteudo,
                    flags=re.DOTALL
                )

                # Inserir o novo código logo abaixo do headerContainer
                conteudo_editado = re.sub(
                    r'(<div[^>]*id="headerContainer"[^>]*>)',
                    r'\1\n' + novo_codigo,
                    conteudo
                )

                # Salvar as mudanças no arquivo
                with open(caminho_arquivo, 'w', encoding='utf-8') as f:
                    f.write(conteudo_editado)

# Novo código a ser inserido
novo_codigo = """
 <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #333; /* Fundo escuro para melhor contraste */
        }

        /* Botão fixo para assinar */
        .fixed-button {
            position: fixed;
            top: 20px; /* Distância do topo */
            left: 20px; /* Distância da esquerda */
            padding: 15px 25px;
            background-color: #1abc9c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            z-index: 1000; /* Para garantir que fique acima de outros elementos */
            transition: background-color 0.3s; /* Transição suave para o hover */
        }

        .fixed-button:hover {
            background-color: #16a085; /* Azul turquesa mais escuro no hover */
        }

        /* Estilos para o fundo semitransparente */
        .overlay {
            display: none; /* Oculto inicialmente */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
            z-index: 999; /* Abaixo do botão, mas acima de outros conteúdos */
        }

        /* Estilos do formulário */
        .checkout-form-container {
            display: none; /* Oculto inicialmente */
            position: fixed; /* Fica fixo na tela */
            top: 50%; /* Centraliza verticalmente */
            left: 50%; /* Centraliza horizontalmente */
            transform: translate(-50%, -50%); /* Para ajustar o centro */
            padding: 30px;
            border: 1px solid #ccc;
            border-radius: 8px;
            width: 100%;
            max-width: 400px; /* Largura máxima do formulário */
            background-color: #fff; /* Fundo do formulário */
            z-index: 1001; /* Acima da overlay */
        }

        .checkout-form h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333; /* Cor do título */
            text-align: center;
        }

        .checkout-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333; /* Cor das labels */
        }

        .checkout-form input[type="text"],
        .checkout-form input[type="tel"],
        .checkout-form input[type="email"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            background-color: #f9f9f9; /* Fundo claro para os campos */
            color: #333; /* Texto dos campos */
        }

        .button-group {
            display: flex;
            flex-direction: column; /* Botões em coluna */
            margin-bottom: 15px;
        }

        .plan-button {
            padding: 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            border: 1px solid #1abc9c;
            background-color: transparent;
            color: #1abc9c;
            transition: all 0.3s;
            margin-bottom: 10px; /* Espaço entre os botões */
        }

        .plan-button.selected {
            background-color: #1abc9c;
            color: #fff; /* Texto em branco quando selecionado */
        }

        .checkout-form input[type="submit"] {
            background-color: #1abc9c; /* Azul turquesa */
            color: white;
            border: none;
            padding: 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
            transition: background-color 0.3s;
        }

        .checkout-form input[type="submit"]:hover {
            background-color: #16a085; /* Azul turquesa mais escuro */
        }
    </style>
</head>
<body>

    <!-- Botão fixo para assinar -->
    <button class="fixed-button" id="ctaButton" onclick="toggleForm()">Assinar Agora</button>

    <!-- Fundo semitransparente -->
    <div class="overlay" id="overlay" onclick="toggleForm()"></div>

    <!-- Formulário de Checkout -->
    <div class="checkout-form-container" id="checkoutFormContainer">
        <form class="checkout-form" id="checkoutForm" onsubmit="return false;">
            <h1>Liberação IMEDIATA</h1>
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required>

            <label for="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <!-- Campo CPF oculto -->
            <input type="hidden" id="cpf" name="cpf" value="34796337067">

            <!-- Botões para as opções de checkout -->
            <div class="button-group">
                <button type="button" id="btnMensal" class="plan-button" onclick="selectPlan('mensal')">1 mês R$ 19,90</button>
                <button type="button" id="btnTrimestral" class="plan-button" onclick="selectPlan('trimestral')">3 meses R$ 39,90</button>
                <button type="button" id="btnSemestral" class="plan-button" onclick="selectPlan('semestral')">6 meses R$ 69,90</button>
                <button type="button" id="btnAnual" class="plan-button" onclick="selectPlan('anual')">1 ano R$ 129,90</button>
            </div>

            <!-- Botão para finalizar -->
            <input type="submit" value="Pagar e Liberar" onclick="prePopulateCheckout();">
        </form>
    </div>

    <script>
        let selectedPlan = ''; // Variável para armazenar o plano selecionado

        // Função para mostrar ou ocultar o formulário
        function toggleForm() {
            const formContainer = document.getElementById('checkoutFormContainer');
            const overlay = document.getElementById('overlay');
            if (formContainer.style.display === 'none' || formContainer.style.display === '') {
                formContainer.style.display = 'block'; // Exibe o formulário
                overlay.style.display = 'block'; // Exibe o fundo semitransparente
            } else {
                formContainer.style.display = 'none'; // Oculta o formulário
                overlay.style.display = 'none'; // Oculta o fundo semitransparente
            }
        }

        function selectPlan(planType) {
            selectedPlan = planType;

            // Atualiza os estilos dos botões para refletir a seleção
            document.getElementById('btnMensal').classList.remove('selected');
            document.getElementById('btnTrimestral').classList.remove('selected');
            document.getElementById('btnSemestral').classList.remove('selected');
            document.getElementById('btnAnual').classList.remove('selected');

            if (planType === 'mensal') {
                document.getElementById('btnMensal').classList.add('selected');
            } else if (planType === 'trimestral') {
                document.getElementById('btnTrimestral').classList.add('selected');
            } else if (planType === 'semestral') {
                document.getElementById('btnSemestral').classList.add('selected');
            } else if (planType === 'anual') {
                document.getElementById('btnAnual').classList.add('selected');
            }
        }

        function prePopulateCheckout() {
            if (!selectedPlan) {
                alert('Por favor, selecione um plano (Mensal, Trimestral, Semestral ou Anual).');
                return false;
            }

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const cpf = document.getElementById("cpf").value;

            let checkoutLink = "";

            if (selectedPlan === 'mensal') {
                checkoutLink = `https://pay.kirvano.com/6026d4be-6c16-4869-85e7-b49181f23523?customer.name=${encodeURIComponent(name)}&customer.email=${encodeURIComponent(email)}&customer.document=${encodeURIComponent(cpf)}&customer.phone=${encodeURIComponent(phone)}&aff=530b3889-7ea7-45cc-9607-dd8ea8cca9e8`;
            } else if (selectedPlan === 'trimestral') {
                checkoutLink = `https://pay.kirvano.com/17344977-6382-47de-aa1a-021740143d2d?customer.name=${encodeURIComponent(name)}&customer.email=${encodeURIComponent(email)}&customer.document=${encodeURIComponent(cpf)}&customer.phone=${encodeURIComponent(phone)}&aff=530b3889-7ea7-45cc-9607-dd8ea8cca9e8`;
            } else if (selectedPlan === 'semestral') {
                checkoutLink = `https://pay.kirvano.com/391cb7e8-9744-49d2-84ae-7b4aef946081?customer.name=${encodeURIComponent(name)}&customer.email=${encodeURIComponent(email)}&customer.document=${encodeURIComponent(cpf)}&customer.phone=${encodeURIComponent(phone)}&aff=530b3889-7ea7-45cc-9607-dd8ea8cca9e8`;
            } else if (selectedPlan === 'anual') {
                checkoutLink = `https://pay.kirvano.com/10c9b8cd-0202-4e77-86fe-9c63fbe0c613?customer.name=${encodeURIComponent(name)}&customer.email=${encodeURIComponent(email)}&customer.document=${encodeURIComponent(cpf)}&customer.phone=${encodeURIComponent(phone)}&aff=530b3889-7ea7-45cc-9607-dd8ea8cca9e8`;
            }

            // Redireciona para o link de checkout
            window.location.href = checkoutLink;
        }

        // Função para mudar o texto do botão a cada alguns segundos
        const ctaButton = document.getElementById('ctaButton');
        const messages = ["Assinar Agora", "Libera Imediato", "Não Perca!", "Sua Chance Aqui!"];
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % messages.length; // Muda o índice para a próxima mensagem
            ctaButton.textContent = messages[currentIndex]; // Atualiza o texto do botão
        }, 3000); // Troca a cada 3 segundos
    </script>
"""

# Executar a função para editar os arquivos HTML
editar_arquivos_html(diretorio=".", novo_codigo=novo_codigo)
