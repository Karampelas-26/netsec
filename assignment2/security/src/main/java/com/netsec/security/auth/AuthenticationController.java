package com.netsec.security.auth;

import com.netsec.security.exception.ApiRequestException;
import com.netsec.security.exception.LockedAccountRequestException;
import com.netsec.security.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.NoSuchElementException;

/**
 * @author George Karampelas
 */
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@ControllerAdvice
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        try {
            return ResponseEntity.ok(authenticationService.login(request));
        } catch (NoSuchElementException noSuchElementException) {
            System.err.println("usrrrr " + noSuchElementException); //todo 400 bad request
            throw new ApiRequestException("User not found");
        } catch (BadCredentialsException badCredentialsException) {
            System.err.println("sadf " + badCredentialsException); //todo 400 bad request
            throw new ApiRequestException("Bad credentials");
        } catch (LockedException lockedException) {
            System.err.println(lockedException);//todo 403 forbidden
            throw new LockedAccountRequestException("Account is locked");
        }
    }


    @GetMapping("/logging/{username}")
    public ResponseEntity<LoggingResponse> getLogging(@PathVariable("username") String name){
        return ResponseEntity.ok(authenticationService.getLoggigns(name));
    }

    @GetMapping("/secure-dummy-end-point")
    public ResponseEntity<DummyResponse> getDummyEndPoint(){
        return ResponseEntity.ok(authenticationService.getDummyText());
    }
}
