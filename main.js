$('.js-todo-form').on('submit', function(e) {
    e.preventDefault();

    var taskField = $(this).find('input[name="task"]');
    var task = taskField.val();

    taskField.val('');

    $('.js-todo-list').append('<li>' + task + '</li>');
});
