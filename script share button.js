﻿// Share Button with Counter by twistedshape.blogspot.com
$(document).ready(function(){var t=$("link[rel=canonical]").attr("href");$.getJSON("http://sharecount.twistblogger.com/?url="+encodeURIComponent(t)+"&callback=?",function(t){shares=t.shares,$(".count").each(function(t,e){service=$(e).parents(".share-btn").attr("data-service"),count=shares[service],count>1e3&&(count=(count/1e3).toFixed(1),count>1e3?count=(count/1e3).toFixed(1)+"M":count+="k"),$(e).html(count)})})});
