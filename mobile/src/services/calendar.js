export const parseTime = (timerTime) => {

  const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  return hours + ':' + minutes + ':' + seconds;
}

export const gerarCalendario = (anoAtual, mesAtual) => { 

  mesAtual--;

  let semanasMes = [];
  let qtdDiasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //Verifica se o ano é bissexto
  if(new Date(anoAtual, 1, 29).getMonth() == 1) {
      qtdDiasMeses[1] = 29;
  }

  let diaUm = new Date(anoAtual, mesAtual, 1);
  let diaUmSemana = diaUm.getDay(); //Dom, Seg, Ter, Qua, Qui, Sex ou Sáb - posição na semana do dia 01

  let semana = [];

  //Se o dia não começa no domingo, pega os outros dias da última semana do mes passado
  if(diaUmSemana > 0) {
      for(let i=diaUmSemana-1; i>=0; i--){
          let qtdDiasMesPassado = qtdDiasMeses[mesAtual-1];
          semana.push(qtdDiasMesPassado -i + '/' + tratarNumero(mesAtual) + "/" + anoAtual);
      }
  }

  //Preenche o mês todo
  for(let contagemDiasMes=1; contagemDiasMes<=qtdDiasMeses[mesAtual]; contagemDiasMes++){
      if(semana.length < 7){
          semana.push(tratarNumero(contagemDiasMes) + '/' + tratarNumero(mesAtual + 1) + "/" + anoAtual);
      } else {
          semanasMes.push(semana);
          semana = [];

          semana.push(tratarNumero(contagemDiasMes) + '/' + tratarNumero(mesAtual + 1) + "/" + anoAtual);
      }
  }

  //Preenche a última do mês com os dias do próximo mês
  for(let contagemDiasMes=1; contagemDiasMes<=semana.length+1; contagemDiasMes++){
      if(semana.length < 7){
          semana.push(tratarNumero(contagemDiasMes) + '/' + tratarNumero(mesAtual + 2) + "/" + anoAtual);
      } else {
          semanasMes.push(semana);
          semana = [];
      }
  }

  return semanasMes;
}

const tratarNumero = (num) => {
  num < 10 ? num = "0" + num : num = num;
  return num;        
}

export const pegarSemanaAtual = () => {
  let now = new Date();

  let dia = now.getDate();
  let mes = now.getMonth()+1;
  let ano = now.getFullYear();

  let dataAtual = tratarNumero(dia) +"/"+ tratarNumero(mes) +"/"+ ano;
  let calendario = gerarCalendario(ano, mes);

  let semanaAtual;

  calendario.forEach(semana => {
      for(let i=0; i<7; i++){
          if(semana[i] == dataAtual){
            semanaAtual = semana;
          }
      }
  });

  return semanaAtual;
}