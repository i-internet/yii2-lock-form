(function(yii) {
  function showLoading() {
    var $self = $(this),
      data = $self.data('yiiActiveForm'),
      $submit = data.submitObject;
    if (!$submit) {
      $submit = $self.find('[type=submit]');
    }
    $submit.button('loading');
  }

  function resetLoading() {
    var $self = $(this),
      $submit = $self.data('yiiActiveForm').submitObject;
    if (!$submit) {
      $submit = $self.find('[type=submit]');
    }
    $submit.button('reset');
  }

  yii.lock = {
    init: function() {
      $('body')
        .on('beforeSubmit', 'form', showLoading)
        .on('ajaxComplete', 'form', resetLoading);
    }
  };
})(yii);
