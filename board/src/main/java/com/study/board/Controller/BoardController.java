package com.study.board.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;


//해당 클래스가 컨트롤러임을 알려주는 어노테이셔
@Controller
public class BoardController {

    @GetMapping("/") //localhost:8080 uri로 매핑해 준다.
    @ResponseBody
    public String main(){
        return "Hello world";
    }


    @GetMapping("/board/write") //localhost:8080/board/write
    //게시물 작성 폼으로 이동하는 컨트롤러
    public String boardWriteForm(){
        //return 되는 정적 템플릿을 열어준다.
        return "boardwrite";
    }
    @PostMapping("/board/writepro")
    public String boardwritePro(String title, String content){
        System.out.println("제목: " +title);
        System.out.println("내용: " +content);
        return "";
    }

}
