<?php
  print_r(getenv(null, true));
  print_r(getenv('IMAP_ACCOUNT', true));

  if( !getenv('IMAP_SERVER', true) ) {
    print("Env var IMAP_SERVER is not set.");
    die();
  }
  if( !getenv('IMAP_ACCOUNT', true) ) {
    print("Env var IMAP_ACCOUNT is not set.");
    die();
  }
  if( !getenv('IMAP_SECRET', true) ) {
    print("Env var IMAP_SECRET is not set.");
    die();
  }

  $imap_server_port = getenv('IMAP_PORT', true) ?: 993;
  $imap_server = '{'.getenv('IMAP_SERVER', true).':'.$imap_server_port.'/imap/ssl}';
  $imap_account = getenv('IMAP_ACCOUNT', true);
  $imap_secret  = getenv('IMAP_SECRET', true);

  if($imap_inbox = imap_open($imap_server.'INBOX', $imap_account, $imap_secret)) {
    print("Connected");

    $list = imap_list($imap_inbox, $imap_server, '*');
    if (is_array($list)) {
      foreach ($list as $val) {
        print( imap_utf7_decode($val) . "\n" );
      }
    } else {
      echo "imap_list failed: " . imap_last_error() . "\n";
    }

    $message_uids = imap_search($imap_inbox, 'UNSEEN', SE_UID);

    foreach($message_uids as $message_uid) {
      $message = imap_fetchstructure($imap_inbox, $message_uid, SE_UID);
      print_r($message);
    }
    
    imap_close($imap_inbox);
  }
  else {
    print("Can't connect to IMAP.");
  }
?>