import React, { useEffect } from 'react'
import useTypedText from '../hooks/useTypedText'
import TextCursor from './text-cursor'
import hljs from 'highlight.js'

const CODE = `package com.github.wojciechfiszer.micronautdemo.controller;

import com.github.wojciechfiszer.micronautdemo.service.User;
import com.github.wojciechfiszer.micronautdemo.service.UserService;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Controller("/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;

    @Get("/{id}")
    HttpResponse<User> getUser(String id) {
        log.debug("Received a request for a user with id {}", id);
        return HttpResponse.ok(userService.getUser(id));
    }

    @Get
    HttpResponse<List<User>> getUsers() {
        log.debug("Received a request for users");
        return HttpResponse.ok(userService.getUsers());
    }

    @Post
    HttpResponse<User> createUser(@Body User user) {
        log.debug("Received a request to create a user {}", user);
        return HttpResponse.created(userService.createUser(user));
    }

    @Put("/{id}")
    HttpResponse<User> updateUser(String id, @Body User user) {
        user.setId(id);
        log.debug("Received a request to update a user {}", user);
        return HttpResponse.ok(userService.updateUser(user));
    }

    @Delete("/{id}")
    HttpResponse<?> deleteUser(String id) {
        userService.deleteUser(id);
        return HttpResponse.noContent();
    }
}`

export default function HomeSection(): JSX.Element {
  useEffect(() => {
    hljs.highlightAll()
  }, [])
  const { typedText: helloText, finished: helloTextFinished } = useTypedText(
    "Hello, I'm Wojciech Fiszer",
  )
  const { typedText: introductionText, finished: introductionTextFinished } =
    useTypedText(
      'I’m a software engineer based in Warsaw, Poland',
      helloTextFinished,
    )
  return (
    <section className="pb-12">
      <div className="container mx-auto flex font-mono">
        <div className="flex-1 py-16">
          <div className="flex items-center">
            <h2 className="text-3xl">{helloText}</h2>
            {!helloTextFinished && (
              <TextCursor
                className="border-white border-l-8 h-7"
                typing={!helloTextFinished}
              />
            )}
          </div>
          <div className="flex items-center pt-3">
            <p className="text-xl text-orange-500">{introductionText}</p>
            {helloTextFinished && (
              <TextCursor
                className="border-orange-500 border-l-8 h-5"
                typing={helloTextFinished && !introductionTextFinished}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1 bg-neutral-800 border border-neutral-600 rounded-xl pt-4 px-4 text-sm max-h-[28rem] shadow-lg shadow-neutral-800">
          <div className="flex gap-2 pb-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="my-2 overflow-hidden relative">
            <div className="absolute top-0 h-24 w-full bg-gradient-to-b from-neutral-800 z-10" />
            <div className="scrolling-container">
              <div className="scrolling-content">
                <pre>
                  <code className="language-java">{CODE + '\n\n' + CODE}</code>
                </pre>
              </div>
            </div>
            <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-neutral-800 z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
