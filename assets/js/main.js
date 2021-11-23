function criaCalculadora() {
    return {
        //ATRIBUTOS
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('conta inválida');
                return;
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value='';
        },

        //METODOS
        inicia() {
            this.clickButtons();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', function() {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        clickButtons() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
