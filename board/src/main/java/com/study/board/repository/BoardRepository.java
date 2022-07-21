package com.study.board.repository;


import com.study.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//<Entity class, primary key type>
public interface BoardRepository extends JpaRepository<Board, Integer> {


 //레포지토리 -> 서비스에서 이용
}
