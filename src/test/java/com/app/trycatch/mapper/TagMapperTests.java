package com.app.trycatch.mapper;

import com.app.trycatch.domain.skilllog.TagVO;
import com.app.trycatch.dto.skilllog.TagDTO;
import com.app.trycatch.mapper.skilllog.TagMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class TagMapperTests {
    @Autowired
    private TagMapper tagMapper;

    @Test
    public void testInert() {
        TagDTO tagDTO = new TagDTO();
        TagVO tagVO = null;
        tagDTO.setTagName("태그2");

        tagVO = tagDTO.toVO();
        tagMapper.insert(tagVO);

        log.info("{}.............", tagVO.getId());
    }
}
