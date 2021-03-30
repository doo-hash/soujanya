function disp_data(id, name, mail_id) {
    console.log('EID :' + id);
    console.log('name :' + name);
    if (mail_id != undefined)
        console.log('eamil id :' + mail_id);
}
disp_data(101, 'ram');
console.log();
disp_data(102, 'raj', 'raj@gmail.com');
