$().ready(function(){
    
    //添加
    $("#sub").click(function(){

        var number = $("#tt").find("tr").length;

        //option:selected 获取下拉框被选中的option
        var sel_val = $("#sel").find("option:selected").text();
        var name_val = $("#name_val").val();
        var num_val = $("#num_val").val();

        if(name_val == ""){
            alert("商品名称不能为空！");
        }else if(num_val == ""){
            alert("商品数量不能为空！");
        }else if(num_val > 99){
            alert("商品数量最高99！")
        }else{
            $("#tt").find("tr").last().after("<tr>\
        <td id='num'>"+ number++ +"</td>\
        <td>"+sel_val+"</td>\
        <td>"+name_val+"</td>\
        <td id='dongnum'>\
        <input type='button' value='+' id='addnum' />\
        <span>"+num_val+"</span>\
        <input type='button' value='-' id='jiannum' />\
        </td>\
        <td>\
            <input type='button' class='del' value='删除' />\
        </td>\
    </tr>");
        }
    });


    // 删除
    $("#tt").on("click",".del",function () {

        $(this).parent().parent().remove();

        //获取表格里的总行数
        var tr_num = $("#tt").find("tr").length;

        for(var i = 1; i < tr_num; i++){
            //表格里的第几个tr里的第一个td  然后重新排序
            $("#tt tr:eq("+ i +") td:first").text(i);
        }
    });

    //加数量
    $("#tt").on("click","#addnum",function(){

        //.next() 获取下一个同级的节点
        var addnum = $(this).next().text();

        addnum++;

        if(addnum == 100){
            alert("商品数量已达到最大值！");
        }else{
            $(this).next().text(addnum);
        }
        
    })

    //减数量
    $("#tt").on("click","#jiannum",function(){

        //.prev() 获取上一个同级的节点
        var jiannum = $(this).prev().text();

        jiannum--;

        if(jiannum == 0){
            alert("商品数量已达到最小值！");
        }else{
            $(this).prev().text(jiannum);
        }
        
    })

    //禁用删除
    $("#del_btn").click(function(){
        if($("#tt tr td").find("input").prop("disabled") == true){
            $("#tt tr td").find("input").removeAttr("disabled");
        }else{
            $("#tt tr td").find("input").attr("disabled","disabled");
        }
    })

})