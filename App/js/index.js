xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "size" : 100,
                        "min" : 50,
                        "max" : 400,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : false
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 450
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "size" : 50,
                        "min" : 20,
                        "max" : 400,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "size" : 150,
                        "min" : 10,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 530
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "size" : 120,
                        "min" : 10,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : false
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3")
                .setLeft("16em")
                .setTop("11.428571428571429em")
                .setWidth("18em")
                .setHeight("9.371428571428572em")
                .setLabelSize("8em")
                .setType("color"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setName("s1")
                .setRequired(true)
                .setLeft("28.952380952380953em")
                .setTop("1.5238095238095237em")
                .setWidth("6.552380952380952em")
                .setHeight("4.3428571428571425em")
                .setCaption("start")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#A52A2A"
                    }
                }),
                "main"
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput5")
                .setLeft("15.238095238095237em")
                .setTop("8.380952380952381em")
                .setWidth("18em")
                .setHeight("16.99047619047619em")
                .setLabelSize("8em")
                .setType("date"),
                "main"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});