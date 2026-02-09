package com.app.trycatch.mapper;

import com.app.trycatch.mapper.member.MemberMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class CorpMemberTests {
    @Autowired
    private MemberMapper memberMapper;
}
