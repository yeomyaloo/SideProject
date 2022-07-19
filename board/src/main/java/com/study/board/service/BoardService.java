package com.study.board.service;

        import com.study.board.entity.Board;
        import com.study.board.repository.BoardRepository;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;
        import org.springframework.web.multipart.MultipartFile;

        import java.io.File;
        import java.io.IOException;
        import java.util.List;
        import java.util.UUID;


//서비스 -> 컨트롤러에서 이용
@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    //글 작성
    public void write(Board board, MultipartFile multipartFile) throws IOException {


        //저장 경로를 지정
        String projectPath = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\files";
        //파일 이름을 랜덤하게 지정하기 위한 UUID 사용
        UUID uuid = UUID.randomUUID();
        //랜덤하게 생성된 이름_해당 파일의 고유한 이름
        String filename = uuid + "_" + multipartFile.getOriginalFilename();

        //파일을 해당 경로에 담아주고 해당 이름으로 넣어준다
        File saveFile = new File("projectPath",filename);
        multipartFile.transferTo(saveFile);

        boardRepository.save(board);
    }

    //게시글 리스트 처리
    public List<Board> boardList(){
        return boardRepository.findAll();
    }


    // 특정 게시글 불러오기
    public Board boardview(Integer id){
        return boardRepository.findById(id).get();
    }

    public void boardDelete(Integer id){
        boardRepository.deleteById(id);
    }

}
