package com.netsec.security.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author George Karampelas
 */
@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class LockedAccountRequestException extends RuntimeException {

    public LockedAccountRequestException(String message) {
        super(message);
    }

    public LockedAccountRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}
