package com.app.trycatch.dto.alarm;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString @NoArgsConstructor
public class AlramDTO {
    private String alramCategory;
    private String alramTitle;
    private Long alramId;
    private String alramReceivedAt;
}
