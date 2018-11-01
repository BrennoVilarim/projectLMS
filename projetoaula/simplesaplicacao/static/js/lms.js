	function ValidaVazio(){
		
		var cadastroAluno = $("#CadastroAlunoAba").attr("aria-expanded");
		var cadastroProfessor = $("#CadastroProfessorAba").attr("aria-expanded");
		var cadastroDisciplina = $("#CadastroDisciplinaAba").attr("aria-expanded");
		var telaInicial = $("#TelaInicialAba").attr("aria-expanded");
		
		if (telaInicial == "true") 
		{
			return false
		}
		if (cadastroAluno == "true") 
		{
			alunoRA = $("#alunoRA").val();
			alunoNOME = $("#alunoNOME").val();
			alunoEMAIL = $("#alunoEMAIL").val();
			alunoCELULAR = $("#alunoCELULAR").val();
			alunoLOGIN = $("#alunoLOGIN").val();
			alunoSENHA = $("#alunoSENHA").val();
			alunoDATAEXP = $("#alunoDATAEXP").val();
			alunoFOTO = $("#alunoFOTO").val();

			if(alunoRA == ""){
				alert("Por favor, preencha o campo de RA!")
				$( "#alunoRA" ).focus();
				return false
			}
			if(alunoNOME == ""){
				alert("Por favor, preencha o campo de Nome!")
				$( "#alunoNOME" ).focus();
				return false
			}
			if(alunoEMAIL == ""){
				alert("Por favor, preencha o campo de Email!")
				$( "#alunoEMAIL" ).focus();
				return false
			}
			if(alunoCELULAR == ""){
				alert("Por favor, preencha o campo de Celular!")
				$( "#alunoCELULAR" ).focus();
				return false
			}
			if(alunoLOGIN == ""){
				alert("Por favor, preencha o campo de Login!")
				$( "#alunoLOGIN" ).focus();
				return false
			}
			if(alunoSENHA == ""){
				alert("Por favor, preencha o campo de Senha!")
				$( "#alunoSENHA" ).focus();
				return false
			}
			if(alunoDATAEXP == ""){
				alert("Por favor, preencha o campo Data de expiração!")
				$( "#alunoDATAEXP" ).focus();
				return false
			}
			if(alunoFOTO == ""){
				alert("Por favor, anexe uma foto!")
				$( "#alunoFOTO" ).focus();
				return false
			}
		} 
		if(cadastroProfessor == "true"){
			professorNOME = $("#professorNOME").val();
			professorEMAIL = $("#professorEMAIL").val();
			professorCELULAR = $("#professorCELULAR").val();
			professorLOGIN = $("#professorLOGIN").val();
			professorSENHA = $("#professorSENHA").val();
			professorDATAEXP = $("#professorDATAEXP").val();
			professorFOTO = $("#professorFOTO").val();
			
			if(professorNOME == ""){
				alert("Por favor, preencha o campo de Nome!")
				$( "#professorNOME" ).focus();
				return false
			}
			if(professorEMAIL == ""){
				alert("Por favor, preencha o campo de E-mail!")
				$( "#professorEMAIL" ).focus();
				return false
			}
			if(professorCELULAR == ""){
				alert("Por favor, preencha o campo de Celular!")
				$( "#professorCELULAR" ).focus();
				return false
			}
			if(professorLOGIN == ""){
				alert("Por favor, preencha o campo de Login!")
				$( "#professorLOGIN" ).focus();
				return false
			}
			if(professorSENHA == ""){
				alert("Por favor, preencha o campo de Senha!")
				$( "#professorSENHA" ).focus();
				return false
			}
			if(professorDATAEXP == ""){
				alert("Por favor, preencha o campo Data de expiração!")
				$( "#professorDATAEXP" ).focus();
				return false
			}
			if(professorFOTO == ""){
				alert("Por favor, anexe uma foto!")
				$( "#professorFOTO" ).focus();
				return false
			}
		}

		if(cadastroDisciplina == "true"){
			disciplinaNOME = $("#disciplinaNOME").val();
			disciplinaCoordenador = $("#disciplinaCoordenador").val();
			disciplinaDATA = $("#disciplinaDATA").val();
			disciplinaStatus = $("#disciplinaStatus").val();
			disciplinaPlanoEn = $("#disciplinaPlanoEn").val();
			disciplinaCargaH = $("#disciplinaCargaH").val();
			disciplinaCompetencia = $("#disciplinaCompetencia").val();
			disciplinaHabilidade = $("#disciplinaHabilidade").val();
			disciplinaEmenta = $("#disciplinaEmenta").val();
			disciplinaConteudoP = $("#disciplinaConteudoP").val();
			disciplinaBibliografiaB = $("#disciplinaBibliografiaB").val();
			disciplinaBibliografiaC = $("#disciplinaBibliografiaC").val();
			disciplinaPercentualP = $("#disciplinaPercentualP").val();
			disciplinaPercentualT = $("#disciplinaPercentualT").val();

			if(disciplinaNOME == ""){
				alert("Por favor, preencha o campo de Nome!")
				$( "#disciplinaNOME" ).focus();
				return false
			}
			if(disciplinaCoordenador == ""){
				alert("Por favor, escolha o coordenador responsável pela matéria!")
				$( "#disciplinaCoordenador" ).focus();
				return false
			}
			if(disciplinaDATA == ""){
				alert("Por favor, preencha o campo de data!")
				$( "#disciplinaDATA" ).focus();
				return false
			}
			if(disciplinaStatus == ""){
				alert("Por favor, defina os status da disciplina!")
				$( "#disciplinaStatus" ).focus();
				return false
			}
			if(disciplinaPlanoEn == ""){
				alert("Por favor, preencha o campo de Senha!")
				$( "#disciplinaPlanoEn" ).focus();
				return false
			}
			if(disciplinaCargaH == ""){
				alert("Por favor, preencha o campo Data de expiração!")
				$( "#disciplinaCargaH" ).focus();
				return false
			}
			if(disciplinaCompetencia == ""){
				alert("Por favor, anexe uma foto!")
				$( "#disciplinaCompetencia" ).focus();
				return false
			}
			if(disciplinaHabilidade == ""){
				alert("Por favor, preencha o campo Data de expiração!")
				$( "#disciplinaHabilidade" ).focus();
				return false
			}
			if(disciplinaEmenta == ""){
				alert("Por favor, descreva a ementa!")
				$( "#disciplinaEmenta" ).focus();
				return false
			}
			if(disciplinaConteudoP == ""){
				alert("Por favor, descreva o conteúdo da programático da disciplina!")
				$( "#disciplinaConteudoP" ).focus();
				return false
			}
			if(disciplinaBibliografiaB == ""){
				alert("Por favor, descreva a bibliografia básica!")
				$( "#disciplinaBibliografiaB" ).focus();
				return false
			}
			if(disciplinaBibliografiaC == ""){
				alert("Por favor, descreva a bibliografia complementar!")
				$( "#disciplinaBibliografiaC" ).focus();
				return false
			}
			if(disciplinaPercentualP == ""){
				alert("Por favor, defina o percentual prático da disciplina!")
				$( "#disciplinaPercentualP" ).focus();
				return false
			}
			if(disciplinaPercentualT == ""){
				alert("Por favor, defina o percentual teórico da disciplina!")
				$( "#disciplinaPercentualT" ).focus();
				return false
			}
		}

	}
