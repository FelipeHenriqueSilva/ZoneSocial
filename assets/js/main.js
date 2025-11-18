document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));
  function maskCPF(v){ return v.replace(/\D/g,'').slice(0,11).replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2'); }
  function maskPhone(v){ return v.replace(/\D/g,'').slice(0,11).replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d{4})$/,'$1-$2').replace(/(\d{4})(\d{4})$/,'$1-$2'); }
  function maskCEP(v){ return v.replace(/\D/g,'').slice(0,8).replace(/(\d{5})(\d{3})$/,'$1-$2'); }
  var cpf=document.getElementById('cpf'), tel=document.getElementById('telefone'), cep=document.getElementById('cep');
  cpf?.addEventListener('input',function(){this.value=maskCPF(this.value);}); tel?.addEventListener('input',function(){this.value=maskPhone(this.value);}); cep?.addEventListener('input',function(){this.value=maskCEP(this.value);});
  var form=document.getElementById('formCadastro'); if(form){ form.addEventListener('submit',function(e){ if(!form.checkValidity()){ e.preventDefault(); form.reportValidity(); return; } e.preventDefault(); alert('Cadastro enviado (simulação).'); form.reset(); }); }
});