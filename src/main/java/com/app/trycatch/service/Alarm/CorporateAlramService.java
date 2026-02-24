package com.app.trycatch.service.Alarm;

import com.app.trycatch.dto.alarm.CorpAlramDTO;
import com.app.trycatch.repository.alarm.CorporateAlramDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class CorporateAlramService {
    private final CorporateAlramDAO corporateAlramDAO;

    public List<CorpAlramDTO> list(Long corpId) {
        return corporateAlramDAO.findAllByCorpId(corpId);
    }

    public void readAll(Long corpId) {
        corporateAlramDAO.setReadByCorpId(corpId);
    }
}
