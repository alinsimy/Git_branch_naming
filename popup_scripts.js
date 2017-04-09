document.addEventListener('DOMContentLoaded', function(){
    var transformButton = document.getElementById('transform_branch_name');

    transformButton.addEventListener('click', function transforBranchName() {
        var initialBranchName = document.getElementById("initial_branch_name").value.trim();
        var newBranchName =  initialBranchName.replace(/\s/g, '_');
        newBranchName =  newBranchName.replace(/\:_/g, '-');
        document.getElementById("branch_name").value = newBranchName;

        new Clipboard('#copy_branch_name');
    })
});
