<?php
/*
 * File : mark_sql_post
 * Input type: POST
 * Inputs: Takes a SQL string and replaces paramaterized [variables] and replaces them with variables coming from POST input
 * Example: "SELECT var1,var2 FROM emps WHERE name=[name] AND ssn=[ssn]" becomes
 *          "SELECT var1,var2 FROM emps WHERE name='" . $_POST['name'] . "' AND ssn='" . $_POST['ssn' . "'"
 * Outputs: Returns status of deletion or error information
 */

function mark_sql_post($sql) { 	
	global $currentuser;     
    preg_match_all("/\[(\w+)]/", $sql, $params);
    $patterns = array();
    $replacements = array();    
    for($i=0; $i<count($params[0]); $i++) {
        $patterns[$i] = "/\\" . $params[0][$i] . "/";

        if($params[1][$i] == "currentuser")
            $getval = get_jamuser();
        else
            $postval = rawurlencode($_POST[$params[1][$i]]);

        if($postval!="")
            if(($postval[0] == "("))
                $replacements[$i] = $postval;
            else
                $replacements[$i] = "'" . $postval . "'";
        else
            $replacements[$i] = "NULL";
    }    
    return preg_replace($patterns, $replacements, $sql);;
}
?>