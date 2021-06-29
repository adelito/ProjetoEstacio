
		function valida(dado){
			if (dado.value==""){
				alert ("O campo "+dado.name+" precisa ser preenchido!");
				return 0;
				}
			else{
			return 1;
			}
		}
		
		function validaNum(dado){
		var teste = /^[0-9]+$/;
			if (dado.value.match(teste)){
			return 1;
			}
			else{
				alert("O campo "+dado.name+" precisa ser numérico!");
				return 0;	
			}
		}
		
		function mudaPag(dado){
			if (dado.value == "tab-done")
				document.getElementById("frame").src = "tab_done.html";
			else
				if (dado.value == "tab-wait")
					document.getElementById("frame").src = "tab_wait.html";
				else
					document.getElementById("frame").src = "tab_all.html";
		}
			
		function validaNumRequired(dado){
			var passed = 0;
			if (dado.value==""){
				alert ("O campo "+dado.name+" precisa ser preenchido!");
				return 0;
				}
			else{
				passed = validaNum(dado);
			return passed;
			}
		}

		function checkBoxes (dado) {
			dado = document.getElementById("main_check_request");
			if (dado.checked > 0)
				checkAllBoxes(dado);
			else
				uncheckAllBoxes(dado);
		}

		function checkAllBoxes (dado) {
			for(var i=0;i<100;i++){
				dado = document.getElementById("check_request");
				if (dado.id == "check_request"){
					dado.checked = 1;
					dado.id = "check_request_checked";
				}else
					break;
			}
		}

		function uncheckAllBoxes (dado) {
			for(var i=0;i<100;i++){
				dado = document.getElementById("check_request_checked");
				if (dado.id == "check_request_checked"){
					dado.checked = 0;
					dado.id = "check_request";
				}else
					break;
			}
		}
		
		function mudaChecked(dado){
			if (dado==""){
				dado = "checked-ok";
				document.getElementById("aceita-termos").value = dado;
			}
			else{
				dado = "";
				document.getElementById("aceita-termos").value = dado;
			}
		}
		
		function validaTermos2 (){
			var passed = 0;
			dado = document.getElementById("aceita-termos").value;
			passed = validaTermos(dado);
			return passed;
		}
		
		function emDesenvolvimento(){
			alert ("Em Desenvolvimento...");
		}
		
		function validaAll(){
			var cont = 0;
			var passed = 0;
			alert ("Conferindo formulário, aguarde...");
			dado = document.getElementById("nome");
			cont ++;
			passed = valida(dado);
			dado = document.getElementById("endereco");
			cont ++;
			passed += valida(dado);
			dado = document.getElementById("tel");
			cont ++;
			passed += validaNumRequired(dado);
			dado = document.getElementById("cidade");
			cont ++;
			passed += valida(dado);
			dado = document.getElementById("estado");
			cont ++;
			passed += valida(dado);
			dado = document.getElementById("RG");
			cont ++;
			passed += validaNumRequired(dado);
			dado = document.getElementById("cpf");
			cont ++;
			passed += validaNumRequired(dado);
			dado = document.getElementById("email");
			cont ++;
			passed += valida(dado);
			if (document.getElementById("form").name == "form-contratante"){
				dado = document.getElementById("num-cartao");
				cont ++;
				passed += validaNumRequired(dado);
				dado = document.getElementById("CVC");
				cont ++;
				passed += validaNumRequired(dado);
				cont ++;
				passed += validaTermos2(dado);
			}
			else{
			cont ++;
			passed += validaTermos2(dado);
			}
			if (cont == passed)
				alert ("Cadastro efetuado com sucesso!");
			else
				alert ("Não foi possivel efetuar o cadastro, por favor verifique os campos obrigatórios!");
			
		}