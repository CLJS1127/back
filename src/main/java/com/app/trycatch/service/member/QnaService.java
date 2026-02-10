package com.app.trycatch.service.member;

import com.app.trycatch.domain.qna.QnaVO;
import com.app.trycatch.mapper.qna.QnaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QnaService {
    private final QnaMapper qnaMapper;  // ✅ Mapper 직접 사용

    public void writeQna(QnaVO qnaVO) {
        qnaMapper.insert(qnaVO);
    }
}
