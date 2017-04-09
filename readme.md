# Git branch naming

##Chrome extension for creating valid branch names
Naming examples: 
	Input: Creating login system and implementing remember password
	Output: Creating_login_system_and_implementing_remember_password
This chrome extension only replace spaces with _

#Future implementations and branch maming validation:
##Git imposes the following rules on how references are named:

	They can include slash / for hierarchical (directory) grouping, but no slash-separated component can begin with a dot . or end with the sequence .lock.

	They must contain at least one /. This enforces the presence of a category like heads/, tags/ etc. but the actual names are not restricted. If the --allow-onelevel option is used, this rule is waived.

	They cannot have two consecutive dots .. anywhere.

	They cannot have ASCII control characters (i.e. bytes whose values are lower than \040, or \177 DEL), space, tilde ~, caret ^, or colon : anywhere.

	They cannot have question-mark ?, asterisk *, or open bracket [ anywhere. See the --refspec-pattern option below for an exception to this rule.

	They cannot begin or end with a slash / or contain multiple consecutive slashes (see the --normalize option below for an exception to this rule)

	They cannot end with a dot ..

	They cannot contain a sequence @{.

	They cannot be the single character @.

	They cannot contain a \.