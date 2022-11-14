$(function () {
  $('#form-test').on('submit', function () {
    nome_input = $("input[name='nome']");
    email_input = $("input[name='email']");
    data_input = $("input[name='data']");
    senha1_input = $("input[name='senha1']");
    senha2_input = $("input[name='senha2']");
    file_input = $("input[name='file']");

    if (nome_input.val() == '' || nome_input.val() == null) {
      $('#erro-nome').html('O nome eh obrigatorio');
      return false;
    }

    if (email_input.val() == '' || email_input.val() == null) {
      $('#erro-email').html('O email eh obrigatorio');
      return false;
    }

    if (data_input.val() == '' || data_input.val() == null) {
      $('#erro-data').html('A data de nascimento eh obrigatoria');
      return false;
    }

    if (senha1_input.val() == '' || senha1_input.val() == null) {
      $('#erro-senha1').html('A senha eh obrigatoria');
      return false;
    }

    if (senha2_input.val() == '' || senha2_input.val() == null) {
      $('#erro-senha2').html('A confirmação de senha eh obrigatoria');
      return false;
    }

    if (file_input.val() == '' || file_input.val() == null) {
      $('#erro-file').html('A imagem eh obrigatoria');
      return false;
    }

    return true;
  });
});
